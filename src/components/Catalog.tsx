import { Button, Item, ListBox } from '@adobe/react-spectrum';
import { useAsyncList } from '@react-stately/data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breed } from '../types';
import { getFetchBreedsUrl } from '../utils/constants';
import { CATALOG_TITLE, COMPARE } from '../utils/strings';

type Props = {};

const Catalog = (props: Props) => {
  const [page, setPage] = useState<number>(0);
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>();
  let list = useAsyncList<Breed>({
    async load({ signal, cursor }) {
      let res = await fetch(cursor || getFetchBreedsUrl(page), {
        signal,
      });
      let json = await res.json();
      let nextCursor;
      if (json && json.length) {
        const newPage = page + 1;
        setPage(newPage);
        nextCursor = getFetchBreedsUrl(newPage);
      }
      return {
        items: json,
        cursor: nextCursor,
      };
    },
  });
  const { items, isLoading, loadMore } = list;

  const onSelectionChange = (keys: any): any => {
    if (keys.size <= 4) {
      setSelectedKeys(keys);
    }
  };

  const navigate = useNavigate();
  const navigateToCompareBreeds = (): any => {
    navigate(`/compare`, { replace: true, state: { ids: selectedKeys } });
  };

  return (
    <>
      <h1
        className="spectrum-Heading spectrum-Heading--sizeXXL dog-profile-title"
        id="title"
      >
        {CATALOG_TITLE}
      </h1>
      <ListBox
        selectionMode="multiple"
        aria-label="Choose 1-4 dog breeds"
        items={items}
        isLoading={isLoading}
        onLoadMore={loadMore}
        onSelectionChange={onSelectionChange}
        selectedKeys={selectedKeys}
        width="size-3000"
        height="size-3600"
      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
      <div className="catalog-compare-button-container">
        <Button variant="primary" onPress={navigateToCompareBreeds}>
          {COMPARE}
        </Button>
      </div>
    </>
  );
};

export default Catalog;
