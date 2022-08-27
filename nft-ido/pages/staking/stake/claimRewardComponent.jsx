//import { LoaderSVG } from '@/components/svg';

const item = {
  name: 'claim',
  label: 'Total rewards',
  totalTokens: '0',
  imgSrc: 'images/NFTminting.png',
  alt: 'rewards',
  button: 'Claim rewards',
  icon: 'images/NFTminting.png',
  iconalt: 'receive',
  subLabel: 'Up next in rewards',
};

export default function Stake(props) {
//   const {
//     claimRewards,
//     rewards,
//     rewardProgress,
//     remainingClaimTime,
//     claimCountdownTimer,
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
            <span>~</span>
            {/* {rewards.toFormat(2)} */}
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
            <h1 className="text-2xl font-bold text-black">
              {/* {lPBalance.toFormat(8)} ZEE{' '} */}
              {/* {rewards.toFormat(4)} ZEE{' '} */} NFTS
            </h1>
          </div>

          <hr className="px-0 py-2 text-gray-100"></hr>

          <div className="flex py-3 pl-1 flex-between">
            <CustomInnerComponent />
          </div>

          <div className="flex py-4 ">
            <h3> claim rewards</h3>
            {/* {remainingClaimTime < 0 || !claimCountdownTimer ? (
              <button
                onClick={claimRewards}
                disabled={rewardProgress || rewards <= 0}
                className={`${
                  rewardProgress || rewards <= 0 ? 'opacity-50' : ''
                } flex justify-center  mx-2 px-2.5 py-3 w-full text-sm font-medium rounded-3xl shadow-sm text-white bg-zee-primary hover:bg-zee-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                {rewardProgress ? (
                  <>
                    <LoaderSVG />
                    Claiming...
                  </>
                ) : (
                  'Claim'
                )}
              </button>
            ) : (
              <>
                <button
                  disabled
                  className="opacity-40 items-center mx-2 px-2.5 py-3 w-full text-sm font-medium rounded-3xl shadow-sm text-white bg-zee-primary hover:bg-zee-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Claimable in {claimCountdownTimer}
                </button>
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
