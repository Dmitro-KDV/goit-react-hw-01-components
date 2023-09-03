// import PropTypes from 'prop-types';
import {PageTitle} from 'components/Statistics/PageTitle'
import {StatList} from 'components/Statistics/StatList'
import data from '../../data.json'

export const Statistics = () => {
    return (
        <section className="statistics">
            <PageTitle text='Upload stats'/>
            <StatList events = {data} />
        </section>
    );
}
