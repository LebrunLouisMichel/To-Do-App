function App(props) {
  return (
      <div className="todoapp stack-large">
        <h1>To Do Liste</h1>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              Was muss erledigt werden?
            </label>
          </h2>
          <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Hinzufügen
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>alle</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Offen</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Erledigt</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">
          DO OR DIE
        </h2>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-0" type="checkbox" defaultChecked={true} />
              <label className="todo-label" htmlFor="todo-0">
                Fuddan wie bei Muddan
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Bearbeiten <span className="visually-hidden">Eat</span>
              </button>
              <button type="button" className="btn btn__danger">
                Löschen <span className="visually-hidden">Eat</span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-1" type="checkbox" />
              <label className="todo-label" htmlFor="todo-1">
                Ratze fatze inner Kiste
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Bearbeiten <span className="visually-hidden">Sleep</span>
              </button>
              <button type="button" className="btn btn__danger">
                Löschen <span className="visually-hidden">Sleep</span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-2" type="checkbox" />
              <label className="todo-label" htmlFor="todo-2">
               Make Alfred wired
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Bearbeiten <span className="visually-hidden">Repeat</span>
              </button>
              <button type="button" className="btn btn__danger">
                Löschen <span className="visually-hidden">Repeat</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
  );
}

export default App;
