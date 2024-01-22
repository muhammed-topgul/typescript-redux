import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchRepositories} from "../data/action/ActionCreator";
import {Dispatch} from "redux";
import {RootState} from "../data";

const RepositoryList: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const {data, error, loading} = useSelector((state: RootState) => state.repositories);
    const [term, setTerm] = useState('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(searchRepositories(term));
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
        </div>
    );
};

export default RepositoryList;