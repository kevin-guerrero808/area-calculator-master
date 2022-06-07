const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    if (!choice) {
        return -1;
    }
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them

    switch(choice) {
        case 'rectangle': 
            if (breadth <= 0 || length <= 0 || !breadth || !length) {
                return -1;
            }
            area = breadth * length;
        break;
        case 'square':
            if (side <= 0 || !side) {
                return -1;
            }
            area = side*4;
        break;
        case 'circle':
            if (radius <= 0 || !radius) {
                return -1;
            }
            area = 3.14 * radius * radius;
        break;
        default :
            return -1;
    }

    return area
}
module.exports = {calculateArea}
