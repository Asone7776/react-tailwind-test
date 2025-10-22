import { useMatches } from 'react-router';

interface MatchWithHandle {
  pathname: string;
  handle: {
    title: string;
  };
}

export function useMatcher() {
  const matches = useMatches() as MatchWithHandle[];
  const current = matches.find((match) => match.handle?.title);
  return {
    matches,
    current,
  };
}
