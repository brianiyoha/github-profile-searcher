import {Repository} from '../models/repository.interface';
import {USER_LIST} from '../mocks/user.mocks';

const repositoryList: Repository[]=[
    {
    name : "ionic 3 Camera",
    description: 'Stuff Desc',
    owner: USER_LIST[0]
},
    {
        name: "ionic 3 SMS",
        description: 'Stuff SMS Desc',
        owner: USER_LIST[0]
    },
       {
        name: "ionic 3 Geolocation",
        description: 'Stuff Desc Location',
        owner: USER_LIST[1]
    },
       {
        name: "ionic 3 Vibration",
        description: 'Stuff Vibration Desc',
        owner: USER_LIST[1]
    }

];

export const REPOSITORY_LIST = repositoryList;