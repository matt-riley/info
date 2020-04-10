import { objectType } from '@nexus/schema';
// images: [
//   {
//     height,
//     resource_url,
//     type,
//     uri,
//     uri150,
//     width
//   }
// ]
// members: [
//   {id}
// ]
// urls: [string]

const Artist = objectType({
  description: 'Information about the artist',
  name: 'Artist',
  definition(t) {
    t.field('description', {
      description: 'Description of the artist',
      nullable: true,
      type: 'String',
    });
    t.field('id', {
      description: 'The artists id',
      nullable: false,
      type: 'ID',
    });
    t.field('name', {
      description: 'The name of the artist',
      nullable: false,
      type: 'String',
    });
  },
});

export default Artist;
