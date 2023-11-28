import Table from "./lib/Table";
import "./lib/Utils";

export class TexasHoldem extends Table {
  constructor(seats: number) {
    super("texas_holdem", seats);
  }
}

export class SixPlusHoldem extends Table {
  constructor(seats: number) {
    super("sixplus_holdem", seats);
  }
}

export class Omaha extends Table {
  constructor(seats: number) {
    super("omaha", seats);
  }
}

export class OmahaFiveCards extends Table {
  constructor(seats: number) {
    super("omaha_5cards", seats);
  }
}

export class OmahaSixCards extends Table {
  constructor(seats: number) {
    super("omaha_6cards", seats);
  }
}