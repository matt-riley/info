import * as functions from 'firebase-functions-test';
// import * as admin from 'firebase-admin';

import * as api from '../index';

const testEnv = functions();

const mockSet = jest.fn();

mockSet.mockReturnValue(true);

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  firestore: () => ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    doc: jest.fn(_path => ({
      set: mockSet,
    })),
  }),
}));

describe('getArtist', () => {
  it('should do something', async () => {
    testEnv.wrap(api.getArtist)
    expect(1).toBe(1);
  });
});
