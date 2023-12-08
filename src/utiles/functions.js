export const defineMealType = (mealName) => {
    switch (mealName){
        case 'Завтрак': return 'breakfast';
        case 'Обед': return 'lunch';
        case 'Ужин': return 'dinner';
        case 'Перекус': return 'snack';
        default: return '';

    }
}