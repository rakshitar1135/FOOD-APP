import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'PURI',
      description: 'deepfried made from flour',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'RICE-SAMBAR',
      description: 'lentil vegetable soup with cooked rice',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'DOSA',
      description: 'Indians Fav',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'IDLI',
      description: 'All Time Love',
      price: 18.99,
    },
  ];

  const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  
    return (
      <section className={classes.meals}>
        <ul>{mealsList}</ul>
      </section>
    );
  };
  
  export default AvailableMeals;