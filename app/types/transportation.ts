export type transportation = "coach" | "flight";

export interface transportationIcon {
  title: string;
  icon: JSX.Element;
  value: transportation;
}

interface departure_airport {
  name: string;
  id: string;
  time: string;
}

type arrival_airport = departure_airport;

interface flight {
  departure_airport: departure_airport;
  arrival_airport: arrival_airport;
  duration: number;
  airplane: string;
  airline: string;
  airline_logo: string;
  travel_class: string;
  flight_number: string;
  extensions: string[];
}

type flights = flight[];

interface carbon_emissions {
  this_flight: number;
  typical_for_this_route: number;
  difference_percent: number;
}

interface transportTypeFlight {
  flights: flights;
  total_duration: number;
  carbon_emissions: carbon_emissions;
  price: number;
  type: string;
  airline_logo: string;
  departure_token: string;
  total: number;
}

interface transportTypeCoach {
  minPrice: number;
  name: string;
  total_duration: number;
}

export type transport = transportTypeFlight | transportTypeCoach;
