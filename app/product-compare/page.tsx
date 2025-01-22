import React from "react";
import Header from "@/components/header";
import Image from "next/image";
import Icon from "@/public/Meubel_House_Logos-05.svg";
import Footer from "@/components/footer";

const ProductComparison = () => {
  const products = [
    {
      id: 1,
      name: "Asgaard Sofa",
      price: "Rs. 250,000.00",
      rating: 4.7,
      reviews: 204,
      image: "/sofa_5.svg",
      details: {
        salesPackage: "1 sectional sofa",
        modelNumber: "TFCBLIGRBL6SRHS",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
        fillingMaterial: "Foam",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "No",
        maxLoadCapacity: "280 KG",
        origin: "India",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
        warrantySummary: "1 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        coveredInWarranty: "Warranty Against Manufacturing Defect",
        notCoveredInWarranty:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        domesticWarranty: "1 Year",
      },
    },
    {
      id: 2,
      name: "Outdoor Sofa Set",
      price: "Rs. 224,000.00",
      rating: 4.2,
      reviews: 145,
      image: "/sofa_1.svg",
      details: {
        salesPackage: "1 Three Seater, 2 Single Seater",
        modelNumber: "DTUBLIGRBL568",
        secondaryMaterial: "Solid Wood",
        configuration: "L-shaped",
        upholsteryMaterial: "Fabric + Cotton",
        upholsteryColor: "Bright Grey & Lion",
        fillingMaterial: "Matte",
        finishType: "Bright Grey & Lion",
        adjustableHeadrest: "Yes",
        maxLoadCapacity: "300 KG",
        origin: "India",
        width: "265.32 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatHeight: "41.52 cm",
        legHeight: "5.46 cm",
        warrantySummary: "1.2 Year Manufacturing Warranty",
        warrantyServiceType:
          "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
        coveredInWarranty:
          "Warranty of the product is limited to manufacturing defects only.",
        notCoveredInWarranty:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
        domesticWarranty: "3 Months",
      },
    },
  ];

  const features = [
    {
      title: "High Quality",
      icon: "/trophy1.svg",
      description: "crafted from top materials",
    },
    {
      title: "Warranty Protection",
      icon: "/tick.svg",
      description: "Over 2 years",
    },
    {
      title: "Free Shipping",
      icon: "/free_ship.svg",
      description: "Order over 150 $",
    },
    {
      title: "24 / 7 Support",
      icon: "/support.svg",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="poppins">
      <Header />
      <div className="hero relative h-[300px]">
        <Image
          src="/shop_1.svg"
          alt="Shop Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <Image
            src={Icon}
            alt="Icon"
            width={80}
            height={80}
            className="mb-2"
          />
          <h1 className="text-5xl font-bold ">Product Comparison</h1>
          <div className="flex items-center pt-6">
            <h1 className="text-lg font-medium ">Home</h1>
            <Image
              src="/right_arrow.svg"
              alt="Arrow"
              width={10}
              height={10}
              className="mx-2"
            />
            <h1 className="text-lg font-light ">Comparison</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row p-8">
        <div className="flex flex-col ml-8 mt-8">
          <h1 className="text-[28px] font-medium w-60">
            Go to Product page for more Products
          </h1>
          <p className="text-xl font-medium text-[#727272] mt-6 underline">
            View More
          </p>
        </div>

        {products.map((product) => (
          <div key={product.id} className="flex flex-col ml-28 mt-8">
            <div className="bg-[#F9F1E7] w-[350px] h-[220px] rounded-xl flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
              />
            </div>
            <h1 className="text-2xl font-medium mt-4">{product.name}</h1>
            <p className="mt-2 text-lg font-medium">{product.price}</p>
            <div className="flex items-center mt-2">
              <h1 className="text-lg font-medium">{product.rating}</h1>
              <Image
                src="/group_88.svg"
                alt="Rating"
                width={150}
                height={150}
                className="ml-3"
              />
              <div className="border-l border-gray-300 h-6 mx-4"></div>
              <p className="text-[#9F9F9F] text-sm">
                {product.reviews} Reviews
              </p>
            </div>
          </div>
        ))}

        <div className="flex flex-col ml-8 mt-32">
          <h1 className="text-2xl font-semibold">Add A Product</h1>
          <div className="flex items-center w-[250px] h-[40px] mt-4 bg-[#B88E2F] rounded-md text-white justify-center">
            Choose a Product
            <Image
              src="/white_down.svg"
              alt="Dropdown"
              width={20}
              height={10}
              className="ml-14"
            />
          </div>
        </div>
      </div>

      <div className="pt-32">
        <hr className="border-t border-gray-300" />
      </div>

      <div className="flex flex-row p-8">
        <div className="flex flex-col pt-20 ml-8">
          <h1 className="text-3xl font-medium">General</h1>
          {[
            "Sales Package",
            "Model Number",
            "Secondary Material",
            "Configuration",
            "Upholstery Material",
            "Upholstery Color",
          ].map((item, index) => (
            <p key={index} className="text-xl pt-10">
              {item}
            </p>
          ))}

          <h1 className="text-3xl font-medium pt-40">Product</h1>
          {[
            "Filling Material",
            "Finish Type",
            "Adjustable Headrest",
            "Maximum Load Capacity",
            "Origin of Manufacture",
          ].map((item, index) => (
            <p key={index} className="text-xl pt-10">
              {item}
            </p>
          ))}

          <h1 className="text-3xl font-medium pt-40">Dimensions</h1>
          {[
            "Width",
            "Height",
            "Depth",
            "Weight",
            "Seat Height",
            "Leg Height",
          ].map((item, index) => (
            <p key={index} className="text-xl pt-10">
              {item}
            </p>
          ))}

          <h1 className="text-3xl font-medium pt-40">Warranty</h1>
          {[
            "Warranty Summary",
            "Warranty Service Type",
            "Covered in Warranty",
            "Not Covered in Warranty",
            "Domestic Warranty",
          ].map((item, index) => (
            <p key={index} className="text-xl pt-28">
              {item}
            </p>
          ))}
        </div>

        {products.map((product) => (
          <div key={product.id} className="flex flex-row pt-20 ml-8">
              <div className="vl-compare mr-16"></div>
              <div className="flex flex-col mt-20 mr-16">
                <p className="text-xl ">{product.details.salesPackage}</p>
                <p className="text-xl mt-10">{product.details.modelNumber}</p>
                <p className="text-xl mt-10">
                  {product.details.secondaryMaterial}
                </p>
                <p className="text-xl mt-10">{product.details.configuration}</p>
                <p className="text-xl mt-10">
                  {product.details.upholsteryMaterial}
                </p>
                <p className="text-xl mt-10">
                  {product.details.upholsteryColor}
                </p>

                <p className="text-xl mt-60">
                  {product.details.fillingMaterial}
                </p>
                <p className="text-xl mt-10">{product.details.finishType}</p>
                <p className="text-xl mt-10">
                  {product.details.adjustableHeadrest}
                </p>
                <p className="text-xl mt-10">
                  {product.details.maxLoadCapacity}
                </p>
                <p className="text-xl mt-16">{product.details.origin}</p>

                <p className="text-xl mt-60">{product.details.width}</p>
                <p className="text-xl mt-10">{product.details.height}</p>
                <p className="text-xl mt-10">{product.details.depth}</p>
                <p className="text-xl mt-10">{product.details.weight}</p>
                <p className="text-xl mt-10">{product.details.seatHeight}</p>
                <p className="text-xl mt-10">{product.details.legHeight}</p>

                <p className="text-xl mt-[237px] w-60">
                  {product.details.warrantySummary}
                </p>
                <p className="text-xl mt-10 w-60">
                  {product.details.warrantyServiceType}
                </p>
                <p className="text-xl mt-10 w-60">
                  {product.details.coveredInWarranty}
                </p>
                <p className="text-xl mt-10 w-60">
                  {product.details.notCoveredInWarranty}
                </p>
                <p className="text-xl mt-10 w-60">
                  {product.details.domesticWarranty}
                </p>
              </div>
            </div>
        ))}
      </div>

      <div className="bg-[#FAF3EA] py-28 flex flex-row justify-center gap-16 mt-40 mb-5">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={70}
              height={70}
            />
            <div className="ml-4">
              <h1 className="text-2xl font-semibold">{feature.title}</h1>
              <h2 className="text-xl text-[#898989] font-medium mt-2">
                {feature.description}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ProductComparison;
