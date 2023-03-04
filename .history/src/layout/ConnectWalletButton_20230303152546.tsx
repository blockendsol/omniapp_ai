/* eslint-disable @next/next/no-img-element */
import Icon from '@/components/shared/Icon';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import metamaskIcon from '/public/card/metamask.svg';
import wallectIcon from '/public/card/walletConnect.svg';

import { connectWallet } from '@/context/cotract/methods';

type ModalProps = {
	isOpen: boolean;
	closeModal?: any;
	setConneted?: any;
};

export default function ConnectWalletButton({ isOpen, closeModal, setConneted }: ModalProps) {
	// function handleConnect() {
	// 	setIsOpen(false);
	// 	setConneted(true);
	// }

	// function closeModal() {
	// 	setIsOpen(false);
	// }

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as='div'
					className='fixed inset-0 z-50 bg-primary bg-opacity-50 backdrop-blur-[20px] backdrop-filter overflow-y-auto'
					onClose={closeModal}
				>
					<div className='relative px-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0' />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='relative inline-block bg-[#0A061E] w-full h-full max-w-[465px] md:h-[585px] p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl md:py-[56px] md:px-[48px]'>
								<div className='w-full flex items-start justify-between'>
									<Dialog.Title as='h3' className='text-[30px] leading-[37px] font-ruberoid font-extrabold text-white'>
										Connect Wallet
									</Dialog.Title>

									<button className='text-white p-1 hover:text-main' onClick={closeModal}>
										<Icon icon='ri-close-fill' className='w-10 h-10' />
									</button>
								</div>

								<div className='w-full flex flex-col items-center gap-6 mt-10'>
									<button
										className='w-full flex flex-col items-center justify-center text-center h-[200px] md:w-[348px] p-[30px] bg-[#02121D] gap-2 rounded-xl border border-main'
										onClick={setConneted}
									>
										<Image src={metamaskIcon} alt='metamask' className='w-[100px] h-[100px]' />

										<h4 className='text-white text-[28px] leading-[34px] font-inter font-semibold'>Metamask</h4>
										<p className='text-[#565656] text-[12px] leading-[18px] font-ruberoid text-center'>
											Connect to your metamask wallet on your browser extension
										</p>
									</button>
									<button className='w-full flex flex-col items-center justify-center text-center h-[200px] md:w-[348px] p-[30px] bg-[#02121D] gap-2 rounded-xl border border-main'>
										<Image src={wallectIcon} alt='metamask' className='w-[100px] h-[100px]' />

										<h4 className='text-white text-[28px] leading-[34px] font-inter font-semibold'>Wallet Connect</h4>
										<p className='text-[#565656] text-[12px] leading-[18px] font-ruberoid text-center'>
											Connect to your metamask wallet on your browser extension
										</p>
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
