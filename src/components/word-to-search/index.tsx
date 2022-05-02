import * as React from "react"
import { fetchDictionaryApi, DictionaryAPIResponse } from "../../service/dictionary-api";

type WordToSearchProps = {
  word: string;
  default: true;
}

export const WordToSearch = ({ word }: WordToSearchProps) => {
  const [data, setData] = React.useState(null as DictionaryAPIResponse|null);

  React.useEffect(() => {
    if (!data) fetchDictionaryApi(word).then(setData).catch(console.error);
  });

  if (!data) {
    return <div className="page">
      Loading the data...
    </div>;
  }

  return <div className="page">
    <div>my word is {word}</div>
    <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
  </div>;
}
