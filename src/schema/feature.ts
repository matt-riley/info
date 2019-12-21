import { objectType } from 'nexus';

const Feature = objectType({
  description: 'Feature switch type',
  name: 'Feature',
  definition(t) {
    t.string('project', {
      description: 'The project that the feature switch belongs to',
      nullable: true,
    });
    t.string('name', {
      description: 'Name of the feature switch',
      nullable: true,
    });
    t.boolean('enabled', {
      description: 'If the switch is on/off (true/false)',
      nullable: true,
    });
  },
});

export default Feature;
