import { objectType } from 'nexus';

const Label = objectType({
  description: 'Information about the label',
  name: 'Label',
  definition(t) {
    t.field('description', {
      description: 'Description of the label',
      nullable: true,
      type: 'String',
    });
    t.field('id', {
      description: 'The label id',
      nullable: false,
      type: 'ID',
    });
    t.field('name', {
      description: 'The name of the label',
      nullable: false,
      type: 'String',
    });
  },
});

export default Label;
