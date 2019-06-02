import { DocumentSnapshot } from '@google-cloud/firestore';
import { APIContext } from 'interfaces/api_context';
import { FeatureArgs } from '../interfaces/feature_args';
import { FeaturesArgs } from '../interfaces/features_args';
import { Service } from '../interfaces/service';
import { ServiceArgs } from '../interfaces/service_args';
import admin from '../utils/firebase';

const rootQuery = {
  Query: {
    async feature(_: void, args: FeatureArgs) {
      const featureRef = await admin.firestore().collection('features').doc(args.project).get();
      const data = featureRef.data();
      const key: string = Object.keys(data).find((feature) => {
        return feature === args.feature;
      });
      return {
        enabled: data[key],
        name: key,
        project: args.project,
      };
    },
    async features(_: void, args: FeaturesArgs, context: APIContext) {
      const featureProjectsRef = await admin.firestore().collection('features');
      // tslint:disable-next-line: max-line-length
      const projects = (args.project) ? await featureProjectsRef.doc(args.project).get() : await featureProjectsRef.get();
      if (projects instanceof DocumentSnapshot) {
        context.logger.info(`Getting feature switches for ${projects.id}`);
        const data = projects.data();
        const keys = Object.keys(data);
        const features = keys.map((key) => {
          return {
            enabled: data[key],
            name: key,
            project: projects.id,
          };
        });
        return features;
      }
      const featureArray = projects.docs.flatMap((project, index) => {
        context.logger.info(`Getting feature switches for ${project.id}`);
        const data = project.data();
        const keys = Object.keys(data);
        const features = keys.map((key) => {
          return {
            enabled: data[key],
            name: key,
            project: project.id,
          };
        });
        return features;
      }) as [];

      return featureArray;
    },
    user(_: void) {
      return '';
    },
    async services(_: void, args: ServiceArgs) {
      const services = await admin.firestore().collection('services').get();
      const serviceArray = services.docs.map((service) => service.data()) as [];

      return Object.keys(args).length === 0 ? serviceArray : serviceArray.filter((service: Service) => {
        for (const key in args) {
          if (service[key] === undefined || service[key] !== args[key]) {
            return false;
          }
        }
        return true;
      });
    },
  },
};

export default rootQuery;
