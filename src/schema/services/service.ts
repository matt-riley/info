import { objectType } from "nexus";

const Service = objectType({
  description: 'service type',
  name: 'Service',
  definition(t) {
    t.string('name', {
      description: 'Name of the service',
      nullable: true,
    });
    t.string('language', {
      description: 'Language the service is written in e.g. Ruby',
      nullable: true,
    });
    t.string('url', {
      description: 'URL of the service',
      nullable: true,
    });
    t.string('host', {
      description: 'Host of the service',
      nullable: true,
    });
    t.string('description', {
      description: 'Description of the service',
      nullable: true,
    });
    t.string('status', {
      description: 'Status of the service',
      nullable: true,
    });
  },
});

export default Service;
