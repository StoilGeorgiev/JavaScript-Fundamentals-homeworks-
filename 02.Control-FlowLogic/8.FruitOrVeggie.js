/**
 * Created by Stoil Georgiev on 24-May-17.
 */
function fruitOrVeggie(input) {
    switch (input){
        case'banana':
        case'apple':
        case'kiwi':
        case'cherry':
        case'lemon':
        case'grapes':
        case'peach':
            console.log('fruit');
            break;
        case'tomato':
        case'cucumber':
        case'pepper':
        case'onion':
        case'garlic':
        case'parsley':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
    }
}