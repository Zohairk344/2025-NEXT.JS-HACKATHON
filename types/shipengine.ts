export interface ShipEngineRate {
    rate_id: string;
    carrier_id: string;
    shipping_amount: {
      amount: number;
      currency: string;
    };
    delivery_days: number;
    service_type: string;
  }
  
  export interface ShipEngineTrackingInfo {
    tracking_number: string;
    status: string;
    estimated_delivery_date: string;
    events: Array<{
      event_date: string;
      event_type: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    }>;
  }