export default {
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'presentation',
      title: 'Presentation',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    },
  ],
};
