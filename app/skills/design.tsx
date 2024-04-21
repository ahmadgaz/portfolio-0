import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export const Design = () => (
  <div className="max-lg:items relative flex min-h-[250px] w-full justify-between gap-[31px] overflow-hidden rounded-lg bg-[rgb(254,254,254)] p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper max-lg:w-full max-lg:flex-col max-lg:items-center">
    <section className="flex w-full flex-col gap-[8px]">
      <h3 className="w-full text-heading">Design Systems</h3>
      <p className="w-full text-subheading text-neutral">
        I develop cohesive design systems that{' '}
        <strong className="font-bold">standardize the user experience</strong>{' '}
        across all platforms. By building these design principles, I ensure{' '}
        <strong className="font-bold">
          consistency in product development and brand recognition
        </strong>
        .
      </p>
    </section>
    <section className="flex gap-[10px]">
      <section className="flex h-full w-[200px] flex-col items-center justify-center gap-[10px] rounded-md bg-background p-[20px] default-border">
        <ArrowUpTrayIcon width={28} height={28} />
        <h3 className="text-center text-[14px] text-heading leading-5">
          Upload Complete
        </h3>
        <p className="text-center text-[12px] leading-4 text-neutral">
          Your files have been uploaded successfully.
        </p>
        <button className="w-full rounded-sm bg-background px-4 py-2 text-[14px] text-button font-bold text-primary animation default-border hover:opacity-75">
          Continue
        </button>
      </section>
      <section className="flex flex-col gap-[16px]">
        <section className="flex flex-row-reverse gap-[10px]">
          <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" className="peer sr-only" />
            <section className="peer relative h-6 w-11 rounded-full bg-border after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral after:bg-background after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-background peer-focus:outline-none peer-focus:ring-0 rtl:peer-checked:after:-translate-x-full dark:border-neutral"></section>
          </label>
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="h-5 w-5 rounded-sm border-neutral ring-0 checked:bg-primary"
            />
          </label>
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="radio"
              value=""
              className="h-5 w-5 border-neutral ring-0 checked:bg-primary"
            />
          </label>
        </section>
        <button className="rounded-sm bg-primary px-4 py-2 text-[14px] text-button font-bold text-background animation hover:opacity-75">
          Submit
        </button>
        <button className="rounded-sm bg-background px-4 py-2 text-[14px] text-button font-bold text-primary animation default-border hover:opacity-75">
          Cancel
        </button>
        <section className="flex gap-[10px]">
          <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" className="peer sr-only" />
            <section className="peer relative h-6 w-11 rounded-full bg-border after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral after:bg-background after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-background peer-focus:outline-none peer-focus:ring-0 rtl:peer-checked:after:-translate-x-full dark:border-neutral"></section>
          </label>
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="h-5 w-5 rounded-sm border-neutral ring-0 checked:bg-primary"
            />
          </label>
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="radio"
              value=""
              className="h-5 w-5 border-neutral ring-0 checked:bg-primary"
            />
          </label>
        </section>
        <ul className="flex w-full">
          <li>
            <input
              className="peer sr-only"
              type="radio"
              value="yes"
              name="answer"
              id="answer_yes"
            />
            <label
              className="flex-1 cursor-pointer rounded-sm rounded-r-[0px] border-2 border-r-[0px] border-border bg-background px-4 py-2 text-[12px] text-button animation hover:bg-border peer-checked:bg-primary peer-checked:text-background"
              htmlFor="answer_yes"
            >
              Yes
            </label>
          </li>
          <li>
            <input
              className="peer sr-only"
              type="radio"
              value="yes"
              name="answer"
              id="answer_no"
            />
            <label
              className="flex-1 cursor-pointer rounded-sm rounded-l-[0px] bg-background px-4 py-2 text-[12px] text-button animation default-border hover:bg-border peer-checked:bg-primary peer-checked:text-background"
              htmlFor="answer_no"
            >
              No
            </label>
          </li>
        </ul>
      </section>
      <section className="flex h-full flex-col gap-[10px]">
        <section className="flex h-fit w-[160px] flex-col gap-[10px] rounded-md bg-background p-[20px] default-border">
          <h3 className="text-[14px] text-heading leading-5">
            Ahmad{' '}
            <span className="text-[12px] font-normal text-neutral">
              {'/ʔáː.màd/'}
            </span>
          </h3>
          <p className="text-[12px] leading-4 text-neutral">
            A name of Arabic origin meaning praised or one who constantly thanks
            God.
          </p>
        </section>

        <section className="flex gap-[10px]">
          <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" className="peer sr-only" />
            <section className="rounded-lg bg-border px-4 py-1 text-[14px] text-neutral animation hover:opacity-75 peer-checked:bg-primary peer-checked:text-background">
              Design
            </section>
          </label>
          <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" className="peer sr-only" />
            <section className="rounded-lg bg-border px-4 py-1 text-[14px] text-neutral animation hover:opacity-75 peer-checked:bg-primary peer-checked:text-background">
              Code
            </section>
          </label>
        </section>
      </section>
    </section>
  </div>
);
