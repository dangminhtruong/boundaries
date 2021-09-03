import './App.css';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';
import * as Sentry from "@sentry/react";

function FallbackComponent() {
  return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;

function App() {
  return (
    <ErrorBoundary>
    {/* <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>} showDialog> */}
      <div>
        <p>The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.</p>
        <BuggyCounter />
      </div>
    {/* </Sentry.ErrorBoundary> */}
    </ErrorBoundary>
  );
}

export default App;
