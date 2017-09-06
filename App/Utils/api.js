import apiConfig from './config';

export var api = {

    authentificate(){
        fetch(apiConfig.url, {
            method: 'post'
        }
    }
};