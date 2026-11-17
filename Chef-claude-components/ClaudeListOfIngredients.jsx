  export default function ClaudeListOfIngredients(props) {
    const list = props.ingredients.map((ing) => {
        return (
          <li key={ing} className="ingredient-pill">
            {ing}
          </li>
        );
      });
    return (
      <section className="ingredients-section">
        <h2 className="ingredients-heading">
          Ingredients on hands:
        </h2>
        <ul className="ingredients-list">
          {list}
        </ul>
      </section>
    );
  }