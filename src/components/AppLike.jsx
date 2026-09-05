import { useDispatch, useSelector } from "react-redux";
import { selectIsLiked, toggleLike } from "../store/likeSlice";

export default function AppLike() {
  const dispatch = useDispatch();
  const isLiked = useSelector(selectIsLiked);

  return (
    <div className="app-like">
      <span>Нравится наше приложение?</span>
      <button
        className="app-like__button"
        type="button"
        aria-label={
          isLiked
            ? "Убрать отметку «Нравится»"
            : "Отметить, что приложение нравится"
        }
        aria-pressed={isLiked}
        onClick={() => dispatch(toggleLike())}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="app-like__heart"
        >
          <path d="M12 20.6 10.55 19.28C5.4 14.6 2 11.52 2 7.75 2 4.67 4.42 2.25 7.5 2.25c1.74 0 3.41.81 4.5 2.09a6.02 6.02 0 0 1 4.5-2.09c3.08 0 5.5 2.42 5.5 5.5 0 3.77-3.4 6.85-8.55 11.54L12 20.6Z" />
        </svg>
      </button>
    </div>
  );
}
