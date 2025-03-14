'use client';

import { createContext, memo, useContext, useState } from 'react';

export const StorageContext = createContext<any>(null);

const StorageProvider = (props: any) => {
	const [isLoading, setIsLoading] = useState(false);

	//api call
	const [setting, setSetting] = useState();
	const [listProductCate, setListProductCate] = useState<any>([]);


	return (
		<StorageContext.Provider
			value={{
				isLoading,
				setIsLoading,
				//api call
				setting,
				setSetting,
				listProductCate,
				setListProductCate,
			}}
			{...props}
		></StorageContext.Provider>
	);
};

export default memo(StorageProvider);

export const useStorage = () => {
	const context = useContext(StorageContext);
	if (!context) {
		throw new Error('useStorage has to be used within <StorageContext.Provider>');
	}
	return context;
};
