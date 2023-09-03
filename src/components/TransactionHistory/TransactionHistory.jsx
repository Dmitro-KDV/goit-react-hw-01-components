import {TransactionHistoryItem} from 'components/TransactionHistory/TransactionHistoryItem'
import transactions from '../../transactions.json'
import {Table, TableThead, TableTh} from './TransactionHistory.stiled';

export const TransactionHistory = () => {
    return (
        <Table >
            <TableThead>
                <tr>
                    <TableTh>Type</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Currency</TableTh>
                </tr>
            </TableThead>
            <TransactionHistoryItem items={transactions} />
        </Table>
    );
}