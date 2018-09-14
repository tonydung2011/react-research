import {
    string,
    shape,
} from 'prop-types';

const types = {
    task: shape({
        id: string,
        title: string,
        detail: string,
    }),
}

export default types;
