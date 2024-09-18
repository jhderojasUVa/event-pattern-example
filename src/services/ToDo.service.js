// Interfaces
import { getToDos as RealGetToDos} from "./interfaces/ToDos.interface";
import { getToDos as MockGetToDos} from "./interfaces/Mock.interface";

// function to return the data
let getToDos;

// check wich interface I must load
if (import.meta.env.VITE_MOCK === 'true') {
    // this will serve mock data
    getToDos = () => {
        return {
            success: true,
            data: MockGetToDos
        }
    };
} else {
    // this will serve API data
    getToDos = RealGetToDos;
}

// Export as a service
export {
    getToDos
}