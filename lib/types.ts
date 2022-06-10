export type SlickDotTypes = {
  dots: Object;
};

export type SEOTypes = {
  title: string;
  content: string;
};

export type dataTypes = {
  data: {
    certificates: Array<Object>;
    projects: Array<Object>;
    loading: boolean;
  };
};

export type JobTypes = {
  jobs: {
    id: number;
    title: string;
    imageSource: string;
    source: string;
    description: string;
    startDate: string;
    endDate: string;
  }[];
};

export type IconTypes = {
  name?: string;
  fill?: string;
};
