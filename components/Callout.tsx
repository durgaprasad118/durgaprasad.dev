import { cn } from '../lib/util';

// <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
const Callout: React.FunctionComponent<
    React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
    return (
        <div
            className={cn(
                ' rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-gray-100  border text-sm font-normal p-4 leading-6',
                className
            )}
            {...attr}
        >
            {attr?.children}
        </div>
    );
};

export default Callout;
