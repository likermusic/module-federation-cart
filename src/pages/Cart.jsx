import { Provider } from "react-redux";
import Header from "../components/Header";
import Products from "../components/Products";
import { store } from "../store";

export default function Cart({ sharedCount, onIncrementSharedCount }) {
  return (
    <Provider store={store}>
      <div className="border">
        <Header />

        <section>
          <h2>Состояние из Host</h2>
          <p>Общее значение: {sharedCount}</p>

          {onIncrementSharedCount && (
            <button type="button" onClick={onIncrementSharedCount}>
              Изменить из Cart
            </button>
          )}
        </section>

        <Products />
      </div>
    </Provider>
  );
}
