import { Grid, Button } from "common";
import styled from "styled-components";

const Navbar = () => {
	const cursorUrl =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAD6+vqWlpZUVFRSUlJPT09XV1dTU1OEhIR3d3fh4eH29va7u7vb29tDQ0Nubm6kpKSzs7PBwcHq6uo7OzuOjo6dnZ1jY2NoaGgfHx/KysrR0dEyMjKqqqotLS0PDw90dHTobTOpAAADT0lEQVR4nO3c7VLiQBCF4SQs64Io4Aey6iLe/00uCkIyPZNMZgjN6TrPz6DWvNUhTCWURUFEREREREREREREREREREREREREREREREREflWlvYKhzZ61VzC0qvyjvYSBVaX1xF1heaO9iEF9FZa/tVcxpO9C01PcF1qe4qHQ8BR/Cstf2isZyrHQ7BRPhVYTa4VGT9R6oc0pNgrLsfZyBtAstDhFp9DgFN1Ce1MUheauqLLQ2hQ9hcYSfYW2TlRvoakp+gstfWgECg1NMVRoZ4rBQjNTDBdauaK2FBqZYluhjSm2Fpq43LQXWphiR6GBW8VdhfiXm85C+Cl2F6K/FyMKwa+oMYXYU4wqhE6MK0Q+USMLgacYW4j7oRFdCPvRH1+IOsUehaDvxT6FmFfUXoWQU+xXiPgduJ6FgJebvoV4J2rvQrgp9i9Em2JCIdgUUwqxpphUCDXFtEKk3U1iIVBiaiHOiZpcCHO5SS9EmWJGIcgUcwoxpphVCDHFvEKEKWYWAnwu5haWc+2CLlGFk1HY6k47oUNU4Yv2KnPEnaXaq8wRV3jtZ2KbuMKrv5y08BWu78Whe+11pvMU/i2KuXtsqr3OdLJwsTt6J47OtBeaTBTupyUKl8rrTOcWHk7HkVv4qrvMDE7h5HD4SQzxTXWZGZqFq+PxtVuI+pC7WVjbnb2LIT7pLTJLvbBxNfnnFk5Cf+LK1Qo3jRc2YohKK8x1KnxwXhGF7g+AOBaKzfXELfzQWF++n8JH8cqtGCLm5rQKBRbF2C1cXHx157Av9H6cP4ohQm5Ovwvf/a9t3cLRZdd2HlXL++tFDPGiSzuTXeFt6LWZKPS9Xa9dFQ4sioVbCHCLW5i1BBbybkbbT0N6dgtRN6dBD2KI5v7NoijcdP8OlpVbCLo5DTN0NyPkxi1ca6/o3N7EEFHvZgS9uoWr7t/BshRD1F7RucnNKfKjNq+pW4j8qM3Lyt2MFmJz+qm9onOTj9rsb06hv5vhY+hRW4CNuxmtxKO26/82W0/yUZu5uxkfzb5F4AYrsPqjtu0I8tZ3h9MzuLm5XenB4VHb1Nz77+hrc7pdWjw9j+ZjczdoHOa2okRERERERERERERERERERERERERERHRR/wF8YhawsCpeYQAAAABJRU5ErkJggg==";

	return (
		<>
			<Grid width="12rem" position="sticky" borderBottom margin="0">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "60%",
					}}
				>
					<Button height="43.5px" type="nav">
						기본 설정
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						회원
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						상품
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						진열
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						주문
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						배송
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						프로모션
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						혜택
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						고객 센터 관리
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						알림
						<Img src={cursorUrl}></Img>
					</Button>
				</div>
			</Grid>
		</>
	);
};

const Img = styled.img`
	width: 1.2rem;
	height: 1rem;
	margin-top: 0.5rem;
`;
export default Navbar;
