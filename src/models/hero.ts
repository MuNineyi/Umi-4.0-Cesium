// import { Effect, Reducer } from 'umi';

// export interface HeroModelState {
//     name: string
// }
//
// export interface HeroModelType {
//     namespace: 'hero';
//     state: HeroModelState;
//     effects: {
//         query: Effect;
//     };
//     reducers: {
//         save: Reducer<HeroModelState>;
//         change: Reducer<HeroModelState>;
//     }
// }

export default {
    namespace: 'hero',
    state: {
        name: 'hero',
    },
    effects: {
        *query({ payload }: any, { call, put }: any) {
            console.log(payload)
        },
    },
    reducers: {
        save(state: any, action: { payload: any; }) {
            return {
                ...state,
                ...action.payload,
            };
        },
        change( state: any) {
            state.name = "change";
        }
    },
};

// export default HeroModel;
