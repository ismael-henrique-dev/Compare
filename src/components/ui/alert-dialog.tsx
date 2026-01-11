'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot='alert-dialog' {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot='alert-dialog-trigger' {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot='alert-dialog-portal' {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot='alert-dialog-overlay'
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot='alert-dialog-content'
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-dialog-header'
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-dialog-footer'
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot='alert-dialog-title'
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot='alert-dialog-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: 'outline' }), className)}
      {...props}
    />
  )
}

type DialogAlert1Props = {
  title: string
  description?: string
  background: AlertBackground
  OnClick: () => void
}

type AlertBackground = 'green' | 'red'

const alertBackground: Record<AlertBackground, string> = {
  red: 'bg-[#DC2626] text-white hover:bg-[#DC2626]/90 active:bg-[#DC2626]/80',
  green: 'bg-brand text-white hover:bg-brand/90 active:bg-brand/80',
}

function AlertDialog1({
  title,
  description,
  background,
  OnClick,
}: DialogAlert1Props) {
  return (
    <AlertDialogContent className='bg-white w-[90vw] max-w-md sm:max-w-lg rounded-xl px-4 sm:px-6 py-5'>
      <AlertDialogHeader className='gap-2'>
        <AlertDialogTitle asChild>
          <h1 className='font-semibold font-rubik text-sm sm:text-base'>
            {title}
          </h1>
        </AlertDialogTitle>

        <AlertDialogDescription asChild>
          <p className='font-rubik text-xs sm:text-sm text-[#52525B]'>
            {description}
          </p>
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <div className='flex flex-col w-full gap-3 sm:gap-4 mt-4'>
          <AlertDialogAction
            className={cn(
              'h-10 sm:h-12 font-semibold rounded-xl border-none focus:outline-none focus:ring-0 cursor-pointer',
              alertBackground[background]
            )}
            onClick={OnClick}
          >
            <span className='text-sm sm:text-base'>Confirmar</span>
          </AlertDialogAction>

          <AlertDialogCancel className='h-10 sm:h-12 font-semibold rounded-xl bg-[#E4E4E7]! text-[#52525B] hover:bg-[#E4E4E7]! hover:opacity-80 active:opacity-70! border-none focus:outline-none focus:ring-0'>
            <span className='text-sm sm:text-base'>Cancelar</span>
          </AlertDialogCancel>
        </div>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialog1,
}
