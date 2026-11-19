export interface CountryLeader {
  name: string;
  title: string;
  assets: unknown[];
  attributes: {
    head_of_government: boolean;
    head_of_state: boolean;
  };
  links: {
    wikipedia?: string;
  };
}
