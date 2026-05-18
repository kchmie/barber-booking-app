import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { useTrans } from '@/hooks/use-trans';

type ServiceOption = {
    id: number;
    name: string;
    price: string | number;
    duration_minutes: number;
    description: string;
};

type BarberOption = {
    id: number;
    name: string;
};

type Props = {
    services: ServiceOption[];
    barbers: BarberOption[];
};

export default function CreateAppointment({ services, barbers }: Props) {
    const { __ } = useTrans();
    const fullHourOptions = Array.from({ length: 8 }, (_, hour) => {
        const value = `${String(hour + 10).padStart(2, '0')}:00`;

        return value;
    });

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: __('Make a reservation'),
            href: '/appointments/create',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={__('Make a reservation')} />

            <div className="mt-5 mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-xl border bg-background p-6">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">{__('Make a reservation')}</h1>
                    <p className="text-sm text-muted-foreground">
                        {__('Fill in the basic appointment details below.')}
                    </p>
                </div>

                <Form
                    action="/appointments"
                    method="post"
                    className="grid gap-4"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="barber_id">{__('Barber')}</Label>
                                <select
                                    id="barber_id"
                                    name="barber_id"
                                    required
                                    className="border-input bg-background hover:bg-primary/2 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring "
                                >
                                    {barbers.map((barber) => (
                                        <option key={barber.id} value={barber.id}>
                                            {barber.name}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.barber_id} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center justify-between gap-4">
                                    <Label>{__('Service')}</Label>
                                    <span className="text-xs text-muted-foreground">
                                        {__('Choose one service')}
                                    </span>
                                </div>

                                <div className="grid gap-3">
                                    {services.map((service) => (
                                        <label
                                            key={service.id}
                                            className="border-input has-checked:border-primary hover:bg-primary/2 has-checked:bg-primary/5 flex cursor-pointer flex-col gap-1 rounded-xl border p-4 transition-colors"
                                        >
                                            <div className="flex items-start justify-between gap-4 ">
                                                <div className="space-y-1">
                                                    <div className="font-medium">
                                                        {service.name}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {service.description}
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-sm font-semibold">
                                                        {service.price.toString().replace(".", ",")}zł
                                                    </div>
                                                    <div className="text-sm text-muted-foreground text-right">
                                                        {service.duration_minutes} {__('min')}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='relative'>
                                                <Input
                                                    type="radio"
                                                    name="service_id"
                                                    value={service.id}
                                                    className="sr-only"
                                                    required
                                                />
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <InputError message={errors.service_id} />
                            </div>

                            <div className="grid gap-2 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="appointment_date">
                                        {__('Appointment date')}
                                    </Label>
                                    <Input
                                        id="appointment_date"
                                        name="appointment_date"
                                        type="date"
                                        className='hover:bg-primary/2'
                                        required
                                    />
                                    <InputError message={errors.appointment_date} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="appointment_time">
                                        {__('Appointment time')}
                                    </Label>
                                    <select
                                        id="appointment_time"
                                        name="appointment_time"
                                        required
                                        className="hover:bg-primary/2 border-input bg-background flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow]"
                                    >
                                        {fullHourOptions.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.appointment_time} />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <Button type="submit" disabled={processing}>
                                    {processing && <Spinner />}
                                    {__('Save reservation')}
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
