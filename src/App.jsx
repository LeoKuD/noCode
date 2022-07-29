import React, { useState, useEffect } from 'react';

import Root from './Components/Root';
import { getComponent } from './helpers/getComponent';
import subtitleWithRow from './json/subtitleWithRow.json';

function App() {
  const [views, setViews] = useState([]);
  const [component, setComponent] = useState(subtitleWithRow);

  useEffect(() => {
    const searchComponents = async () => component;

    // функция получения компонента, принимает на вход имя компонента и возвращает компонент по указанному пути или null
    async function loadData() {
      const extractComponentsFromSearchResult = ({ obj }) => {
        const View = getComponent(obj.componentName);

        // View - импортируемый компонент, получает в качестве параметра поле componentName из json
        return (
          <View key={obj.globalId} props={obj.data} globalId={obj.globalId}>
            {obj.components && obj.components.map(extractComponentsFromSearchResult)}
          </View>
        );
      };
      const componentsToRender = await searchComponents('components').then((obj) =>
        extractComponentsFromSearchResult(obj),
      );
      setViews(componentsToRender);
    }

    loadData();
  }, [component]);

  return (
    <>
      <Root setComponent={setComponent} />
      <React.Suspense fallback='Loading views...'>
        <div className='container'>{views}</div>
      </React.Suspense>
    </>
  );
}

export default App;
