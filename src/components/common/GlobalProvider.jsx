import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from '../../styles/global.style';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../constants/theme';

export const queryClient = new QueryClient();

const GlobalProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default GlobalProvider;
