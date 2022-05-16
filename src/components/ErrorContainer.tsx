import { GENERIC_ERROR } from '../utils/constants';

type Props = {
  message?: string;
};

const ErrorContainer = ({ message = GENERIC_ERROR }: Props) => {
  return <div className="error-container">{message}</div>;
};

export default ErrorContainer;
