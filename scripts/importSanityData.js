import { createClient } from "@sanity/client";
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

// Remove unwanted data from Sanity
async function clearOldData() {
  try {
    console.log("Fetching existing products from Sanity...");

    // Query all existing products in Sanity
    const query = '*[_type == "product"]';
    const existingProducts = await client.fetch(query);

    console.log(
      `Found ${existingProducts.length} existing products. Deleting...`
    );

    for (const product of existingProducts) {
      await client.delete(product._id);
      console.log(`Deleted product: ${product._id}`);
    }

    console.log("All existing products have been removed.");
  } catch (error) {
    console.error("Error clearing old data:", error.message);
  }
}

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    // Fetch the image from the provided URL
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    // Upload the image to Sanity
    const asset = await client.assets.upload("image", buffer, {
      filename: path.basename(imageUrl),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", error.message);
    return null;
  }
}

// Import data from API to Sanity
async function importData() {
  try {
    console.log("Fetching products from API...");

    // Fetch products from the API
    const response = await axios.get(
      "https://template6-six.vercel.app/api/products"
    );
    const products = response.data;

    console.log(`Fetched ${products.length} products.`);

    // Iterate over each product and process it
    let numericId = 1; // Start numeric ID from 1

    for (const product of products) {
      console.log(`Processing product: ${product.title}`);

      // Upload the product image to Sanity if available
      let imageRef = null;
      if (product.imageUrl) {
        imageRef = await uploadImageToSanity(product.imageUrl);
      }

      // Create a Sanity product document
      const sanityProduct = {
        _type: "product",
        id: numericId,
        title: product.title,
        description: product.description,
        price: product.price,
        discountprice: product.dicountPercentage || 0,
        priceWithoutDiscount: product.price || 0,
        tags: product.tags || [],
        isNew: product.isNew || false,
        imageurl: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : null,
      };

      console.log("Uploading product to Sanity:", sanityProduct.title);

      // Upload the product to Sanity
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);

      numericId++; // Increment numeric ID
    }

    console.log("Data import completed successfully!");
  } catch (error) {
    console.error("Error importing data:", error.message);
  }
}

// Main function to clear old data and import new data
async function main() {
  await clearOldData();
  await importData();
}

// Start the process
main();