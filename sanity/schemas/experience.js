export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'companyLogo',
      title: 'CompanyLogo',
      type: 'image',
    },
    {
      name: 'companyName',
      title: 'CompanyName',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
  ],
};
