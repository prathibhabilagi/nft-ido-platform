//import { LoaderSVG } from '@/components/svg';

const item = {
  name: 'unstake',
  label: 'Staked NFTs',
  totalTokens: '0',
  imgSrc: 'images/NFTminting.png',
  alt: 'NFT',
  button: 'Unstake NFT',
  icon: 'images/NFTminting.png',
  iconalt: 'Lock',
  subLabel: 'Total locked',
};

export default function Stake(props) {
//   const {
//     unstakev2LP,
//     withdrawv2Tokens,
//     isWithdrawable,
//     remainingTime,
//     countdownTimer,
//     isLoading,
//     stakedv2Value,
//     unstakingProgress,
//   } = props;
  const CustomInnerComponent = () => {
    return (
      <>
        <div className="inline-flex pr-4 ">
          <img className="w-10 h-10" src={item.icon} alt={item.iconalt} />
        </div>
        <div className="flex flex-col items-start flex-1 block mx-1">
          <p className="block text-xs text-gray-700">{item.subLabel}</p>
          <h1 className="block text-lg font-bold text-black">
            {/* {stakedv2Value.toFormat(2)} */}"nfts"
          </h1>
        </div>
      </>
    );
  };
  return (
    <div
      key={item.name}
      className="flex flex-col px-2 py-4 overflow-hidden rounded-lg shadow-lg bg-light-gray"
    >
      <div className="flex-shrink-0 px-4">
        <div>
          <img
            className="inline-block w-16 mr-2"
            src={item.imgSrc}
            alt={item.alt}
          />
          <div className="block px-4 py-2">
            <p className="inline-flex justify-center text-sm font-bold text-gray-500 md:pr-2 lg:pr-4">
              {item.label}
            </p>
          </div>

          <div className="block px-3 pb-5 ">
            {/* {lPBalance.toFormat(8)} ZEE{' '} */}
            {/* {isWithdrawable ? ( */}
              <h1 className="text-2xl font-bold text-black">{'0.0000'} NFTS </h1>
            {/* ) : ( */}
              <h1 className="text-2xl font-bold text-black">
                {/* {stakedv2Value.toFormat(4)} ZEE{' '} */}
              </h1>
            {/* )} */}
          </div>

          <hr className="px-0 py-2 text-gray-100"></hr>

          <div className="flex py-3 pl-1 flex-between">
            <CustomInnerComponent />
          </div>
<h3>Unstaking...</h3>
          {/* {isWithdrawable ? (
            <div className="flex py-4">
              {remainingTime < 0 || !countdownTimer ? (
                <>
                  <button
                    onClick={withdrawv2Tokens}
                    disabled={isLoading}
                    className="flex justify-center mx-2 px-2.5 py-3 w-full text-sm font-medium rounded-3xl shadow-sm text-white bg-zee-primary hover:bg-zee-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    {isLoading ? (
                      <>
                        <LoaderSVG />
                        Withdrawing...
                      </>
                    ) : (
                      'Withdraw'
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    disabled
                    className="opacity-40 items-center mx-2 px-2.5 py-3 w-full text-sm font-medium rounded-3xl shadow-sm text-white bg-zee-primary hover:bg-zee-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Withdraw in {countdownTimer}
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="flex py-4 ">
              <button
                onClick={unstakev2LP}
                disabled={unstakingProgress || stakedv2Value <= 0}
                className={`${
                  unstakingProgress || stakedv2Value <= 0 ? 'opacity-50' : ''
                } flex justify-center mx-2 px-2.5 py-3 w-full text-sm font-medium rounded-3xl shadow-sm text-white bg-zee-primary hover:bg-zee-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                {unstakingProgress ? (
                  <>
                    <LoaderSVG />
                    Unstaking...
                  </>
                ) : (
                  'Unstake'
                )}
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
