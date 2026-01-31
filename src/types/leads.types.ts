export interface Lead {
  leadId: number;
  accountType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryName: string;
  leadRegistration: string;
  campaignName: string;
  leadStatus: string;
  leadUpdateTime: string;
  registrationTime: string;
}

export interface PageInfo {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

export interface LeadsResponse {
  content: Lead[];
  page: PageInfo;
}
