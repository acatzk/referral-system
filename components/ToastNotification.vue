<template>
	<div>
		<client-only>
			<notificationGroup group="success" class="z-50">
				<div class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end">
					<div class="max-w-sm w-full">
						<notification v-slot="{ notifications }">
							<div  class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
										v-for="(notification, i) in notifications" :key="i">
								<div class="flex justify-center items-center w-12 bg-green-500">
									<svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>
								</div>
								<div class="-mx-3 py-2 px-4">
									<div class="mx-3">
										<span class="text-green-500 font-semibold">{{ notification.title }}</span>
										<p class="text-gray-600 text-sm">{{ notification.description }}</p>
									</div>
								</div>
							</div>
						</notification>
					</div>
				</div>
			</notificationGroup>
		</client-only>
		<client-only>
			<notificationGroup group="error" class="z-50">
				<div class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end">
					<div class="max-w-sm w-full">
						<notification v-slot="{ notifications }">
							<div  class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
										v-for="(notification, i) in notifications" :key="i">
								<div class="flex justify-center items-center w-12 bg-red-500">
									<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
								</div>
								<div class="-mx-3 py-2 px-4">
									<div class="mx-3">
										<span class="text-red-500 font-semibold">{{ notification.title }}</span>
										<p class="text-gray-600 text-sm">{{ notification.description }}</p>
									</div>
								</div>
							</div>
						</notification>
					</div>
				</div>
			</notificationGroup>
		</client-only>
	</div>
</template>