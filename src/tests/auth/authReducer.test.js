import authReducer from '../../auth/authReducer.js'
import { types } from '../../types/types.js';

describe('pruebas de componente reducer',()=>{
    test('debe de retornar el estado por defecto',()=>{
        //el reducer siempre regresa a un estado
        const state = authReducer({loggen: false},{});
        // El estado inicial es false
        expect(state).toEqual({loggen:false})
    })
    test('debe autenticar y colocar el name del usuario', ()=>{
        //creamos la acción
         const action ={
             type: types.login,
             payload: {
                 name:'Jenny'
             }
         }
         // Se envía la acción al reducer
         const state = authReducer({logged:false}, action);
         //Se espera que el logged esté en true y el name se Jenny
         expect(state).toEqual({
             logged:true,
             name:'Jenny'
         })
    } )
    test('debe de borrar el nombre del usuario y logged en false',()=>{
        const action ={
            type: types.logout,
        }

        //Estado por defecto
        const state = authReducer({logged:false, name : 'Jenny'}, action);
        //SE espera que luego de ejecutar esa acción, el state
        //sea el logged en false y que no tenga el usuario 
        expect(state).toEqual({
            logged:false
        });
    })
})