import './styles/index.scss';
import { ExchangePage } from './ui';
import { withRedux } from "./utils";

const App = () => {
  return (
      <div>
          <ExchangePage />
      </div>
  );
}

export default withRedux(App);
