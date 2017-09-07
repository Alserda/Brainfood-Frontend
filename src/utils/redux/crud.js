import { types as statusType } from 'data/status/constants';

const crudTypeGroup = (type, context) => ({
  [type]: `${context}/${type}`,
  [`${type}_SUCCESS`]: `${context}/${type}_SUCCESS`,
  [`${type}_FAILED`]: `${context}/${type}_FAILED`,
});


function createCrudTypes(namespace) {
  const context = namespace.toUpperCase();

  const crudTypes = [
    'FETCH_COLLECTION',
    'FETCH_ONE',
    'CREATE',
    'UPDATE',
    'DELETE'
  ];

  const transformed = crudTypes.reduce(
    (types, type) => ({
      ...types,
      ...crudTypeGroup(type, context)
    }), {});

  return transformed;
}


const createCrudActions = types => ({
  fetchCollection: () => ({
    type: types.FETCH_COLLECTION,
    status: statusType.fetching,
  }),

  fetchCollectionSuccess: (payload) => ({
    type: types.FETCH_COLLECTION_SUCCESS,
    payload,
    status: statusType.success,
  }),

  fetchOne: (id) => ({
    type: types.FETCH_ONE,
    id,
    status: statusType.fetching,
  }),

});


export const creators = {
  types: createCrudTypes,
  actions: createCrudActions,
};