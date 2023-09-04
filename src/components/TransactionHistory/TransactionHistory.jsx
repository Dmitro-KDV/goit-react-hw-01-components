// import {TransactionHistoryItem} from 'components/TransactionHistory/TransactionHistoryItem'
// import transactions from '../../transactions.json'
import {Table, TableThead, TableTh, TableTd, TableTbody} from './TransactionHistory.stiled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <Table >
            <TableThead>
                <tr>
                    <TableTh>Type</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Currency</TableTh>
                </tr>
            </TableThead>
            {items.map(({id, type, amount, currency}) => (
                <TableTbody key={id}>
                    <tr>
                        <TableTd>{type}</TableTd>
                        <TableTd>{amount}</TableTd>
                        <TableTd>{currency}</TableTd>
                    </tr>
                </TableTbody>
            ))}
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired, 
        }).isRequired
    ).isRequired
}