const RadialBlob = ({ position }: { position: string }) => {
  return (
    <div
      className={`${position} absolute z-10 bg-blue-400/40 blur-[200px] h-[45rem] w-[45rem] rounded-full  "`}
    />
  );
};

export default RadialBlob;
